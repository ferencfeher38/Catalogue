import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import "../../styles/home/Banner.scss";

type Banner = {
  id: number;
  active: boolean;
  name: string;
  description: string;
  image: string;
};

export const Banner = function () {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const fetchBanners = useCallback(async () => {
    try {
      const response = await axios.get<{ "hydra:member": Banner[] }>(
        "https://mockup-api.marso.hu/banners"
      );
      setBanners(response.data["hydra:member"]);
    } catch (error) {
      console.error("Hiba az adatok lekérésekor:", error);
      setBanners([]);
    }
  }, []);

  useEffect(() => {
    fetchBanners();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [fetchBanners]);

  useEffect(() => {
    if (banners.length === 0) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [banners]);

  if (banners.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBanner = banners[currentBannerIndex];

  return (
    <div className="banner-container">
      <div key={currentBanner.id} className="banner-item">
        <img src={currentBanner.image} alt={currentBanner.name} />
        <div className="banner-content">
          <div className="name">{currentBanner.name}</div>
          <div className="description">{currentBanner.description}</div>
        </div>
      </div>
    </div>
  );
};
