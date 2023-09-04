import service from "..";
//获取首页轮播图的数据
export function getBanner(){
  return service({
    method:"GET",
    url:"/banner?type=2",
  })
}
export function getMusicList(){
  return service({
    method:"GET",
    url:"/personalized?limit=10",
  })
}

export function getSearchMusic(data){
  return service({
    method:"GET",
    url:`/search?keywords=${data}`,
  })
}
export function getPhoneLogin(data){
  return service({
    method:"GET",
    // url:`/login?email=${data.username}&password=${data.userpassword}`,
    url:`/register/anonimous`,
  })
}