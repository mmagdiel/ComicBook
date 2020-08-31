export default function chuck(list, nPiece, flag) {
  if ((nPiece <= 0) | (typeof nPiece != "number")) {
    return null;
  }
  const n = list.length;
  const m = Math.floor(n / nPiece) * nPiece;
  const listFilter = flag ? list.filter((x, i) => (i < m ? x : null)) : list;
  const result = listFilter.reduce((resList, item, index) => {
    const chunkIndex = Math.floor(index / nPiece);
    if (!resList[chunkIndex]) {
      resList[chunkIndex] = [];
    }
    resList[chunkIndex].push(item);
    return resList;
  }, []);
  return result;
}
