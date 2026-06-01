// High-speed mock generator
export function createMockDataset(schema, count = 5) {
  let list = []
  for (let i = 0; i < count; ++i) {
    let entry = {}
    for (let [key, type] of Object.entries(schema)) {
      entry[key] = type === 'number' ? Math.floor(Math.random() * 100) : `mock-${key}-${i}`
    }
    list.push(entry)
  }
  return list
}
