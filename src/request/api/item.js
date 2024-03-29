import service from "..";
//获取首页轮播图的数据
export function getMusicItemList(data){
  return service({
    method:"GET",
    url:`/playlist/detail?id=${data}`,
  })
}
export function getItemList(data){
  return service({
    method:"GET",
    url:`/playlist/track/all?id=${data}&limit=20&offset=0`,
  })
}

export function getMusicLyric(data){
  return service({
    method:"GET",
    url:`/lyric?id=${data}`,
  })
}