import React from 'react';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">Support Our Mission</h1>
        <p className="text-lg mb-4">
          Help us continue our work preserving Appalachian heritage through community-driven, 
          ethical cultural initiatives.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Harmony for Hope, Inc.</h3>
          <p>EIN: 81-1907024</p>
          <p>704 Main St., Mount Hope, WV 25880</p>
          <p>Phone: (304) 640-4809</p>
        </div>
      </div>
    </div>
  );
}
