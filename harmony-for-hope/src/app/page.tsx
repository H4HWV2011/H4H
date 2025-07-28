'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HarmonyForHopeHomepage: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
