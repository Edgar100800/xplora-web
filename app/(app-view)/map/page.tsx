"use client";

import React, { useState, useEffect } from "react";

import { CategoriesBar } from "@/app/ui/movile-app/categories-bar";
import { ExploreMap } from "@/app/ui/map/explore_map";

export default function Page() {


    return (
        <div className="w-full h-full relative pt-[64px]">
            <CategoriesBar className="fixed z-10 top-[63px] bg-p-white" />
            <ExploreMap />
        </div>
    );
}
