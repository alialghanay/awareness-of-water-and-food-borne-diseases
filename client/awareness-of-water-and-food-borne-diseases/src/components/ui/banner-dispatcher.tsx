"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { setBanner } from "@/lib/features/slice";
import { IBanner } from "collection-types";

const BannerDispatcher = ({ banner }: { banner: IBanner[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (banner) {
      dispatch(setBanner(banner));
    }
  }, [banner, dispatch]);

  return null;
};

export default BannerDispatcher;
