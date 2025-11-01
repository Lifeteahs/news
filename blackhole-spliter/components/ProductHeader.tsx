import React from 'react';
import Link from 'next/link';
import Rating from './Rating';
import Badge from './Badge';

export default function ProductHeader() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h1 className="text-4xl font-bold mb-4">BLACKHOLE SPLITER 11</h1>
      
      <div className="mb-4">
        <Link href="#" className="text-blue-600 hover:underline text-sm">
          PROGMORE FOR WEB DESIGN AND MANAGEMENT
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <Badge variant="info">Freeware</Badge>
        <div className="flex gap-2">
          <span className="text-2xl">📱</span>
          <span className="text-2xl">🍎</span>
        </div>
        <Rating rating={5} votes={20681} />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-medium">Latest Version: 11</span>
        <Badge variant="success">Safe to install</Badge>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-6">
        <h2 className="text-3xl font-bold mb-2">INCREASE EFFICIENCY WITH BLACKHOLE SPLITER!</h2>
        <div className="flex items-center gap-4 text-sm mb-4">
          <span>Boris Weber</span>
          <span>•</span>
          <span>05/15/2024</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded border border-white/20">
          <p className="italic text-lg">
            Blackhole Spliter is a powerful web design and management tool that helps streamline processes and boost productivity.
          </p>
        </div>
        <div className="flex gap-6 mt-4">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded font-bold">
            2024 Editor&apos;s Rating: EXCELLENT
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">User Rating:</span>
            <Rating rating={5} showVotes={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
