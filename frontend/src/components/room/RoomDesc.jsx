"use client";

import * as React from "react";

function RoomDesc() {
    return (
      <div className="rounded-xl w-full p-2 inner-card">
        <div className="w-full flex flex-col">
            <div className="flex">
                <div className="flex-1">
                    <h1 className="font-extrabold">Room number 1</h1>
                </div>
                <div>
                    <span className="text-sm">14:30</span>
                </div>
            </div>
        </div>
      </div>
    );
}

export default RoomDesc;