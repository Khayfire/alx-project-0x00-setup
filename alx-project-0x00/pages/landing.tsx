import Card from "@/components/Card"
import React from "react";
import Button from "@/components/Button";




const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
       <Card />
    </div>
  )
}

function Landingpage(): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Landing Page Buttons</h1>
      
      <div className="flex flex-col gap-4">
        {/* Small Buttons */}
        <div className="flex gap-3">
          <Button title="Small - Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small - Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small - Rounded-full" size="small" shape="rounded-full" />
        </div>

        {/* Medium Buttons */}
        <div className="flex gap-3">
          <Button title="Medium - Rounded-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium - Rounded-md" size="medium" shape="rounded-md" />
          <Button title="Medium - Rounded-full" size="medium" shape="rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="flex gap-3">
          <Button title="Large - Rounded-sm" size="large" shape="rounded-sm" />
          <Button title="Large - Rounded-md" size="large" shape="rounded-md" />
          <Button title="Large - Rounded-full" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;