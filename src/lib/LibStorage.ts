// 
export default {
  set_exStorage(key, message){
    if(typeof window !== 'undefined' ){
      localStorage.setItem( key, JSON.stringify(message))
    }
  },
  get_exStorage(key){
    var ret = []
//console.log(typeof window)
    if(typeof window !== 'undefined' ){
      var dat = JSON.parse(localStorage.getItem(key) || '[]')
      ret = dat
    }
    return ret
  },
  remove_exStorage(key){
    localStorage.removeItem( key );
  },  
  func1: function(){
    return {
      DB_NAME: "db1",      
    }
  },

}
