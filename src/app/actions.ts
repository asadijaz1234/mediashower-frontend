"use server";

import { cookies } from "next/headers";

const ACTIVE_INDEX_KEY = "homeHeroactiveIndex";

export async function getHeroActiveIndex() {
  const cookiesStore = cookies();
  const cookieValue = cookiesStore.get(ACTIVE_INDEX_KEY);
  let currentActiveIndex = String(cookieValue?.value) as any;
  currentActiveIndex = Number.parseInt(currentActiveIndex, 10);
  currentActiveIndex = Number.isNaN(currentActiveIndex) === false ? currentActiveIndex : 0;

  return Promise.resolve(currentActiveIndex);
}

export async function updateHeroActiveIndex(activeIndex?: number) {
  const cookiesStore = cookies();
  const newIndex = ((activeIndex || 0) + 1) % 7;

  cookiesStore.set(ACTIVE_INDEX_KEY, String(newIndex), { path: "/" });

  return Promise.resolve(newIndex);
}

export async function getRandomHeroActiveIndex() {
  const activeIndex = Math.floor(Math.random() * 7);

  return Promise.resolve(activeIndex);
}
