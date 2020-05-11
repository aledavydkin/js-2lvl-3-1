export const data = { name: 'Маг', health: 50 };

export function stripOfLife(data) {
  if (data.health >= 50) {
    return 'healthy';
  } if (data.health < 50 && data.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
