export const data = {name: 'Маг', health: 50};

export function stripOfLife(data) {
  if (data.health >= 50) {
    return 'healthy'
  } else if(data.health < 50 && data.health > 15) {
    return 'wounded'
  } else {
    return 'critical'
  }
}



