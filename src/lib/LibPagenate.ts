//import LibCommon from "../libs/LibCommon"

//
const LibPagenate = {
  per_page: 10,
  /*
  init:function(){
      this.per_page = 10;
  },    
  */
  set_per_page:function(num){
      this.per_page = num;
  },
  /**
  * getMaxPage
  * @param
  *
  * @return
  */    
  getPerPage:function(){
    return  this.per_page;
  },
  /**
  * getMaxPage
  * @param
  *
  * @return
  */    
  getMaxPage:function(count){
      const num = count / this.per_page;
      return num
  },  
  /**
  * getPageStart
  * @param
  *
  * @return
  */              
  getPageStart: function(page: number): any
  {
      const start_num = (page -1) * this.per_page;
      const end = page * this.per_page;
      const ret ={
          start: start_num,  end: end,
      }        
//        console.log("per_page:",this.per_page)
      return ret;
  },   
  /**
  * isPagingDisplay
  * @param
  *
  * @return
  */   
  isPagingDisplay(count){
      let ret = 0;
      const num = count / this.per_page;
      if(num >= 1){
          ret = 1
      }
      return ret;
  },
  /*
  is_next_display(page, count){
      let ret = 0
      const maxNum = count / this.per_page;
      if(page < maxNum){
          ret = 1
      }
      return ret
  },    
  */
  /**
  * getPageItems
  * @param
  *
  * @return
  */  
  getPageItems(data){
      const paginate_disp = this.is_paging_display(data.length)
      const page_item = {
          "item_count":data.length ,"paginate_disp": paginate_disp
      }
      const param = {
            "docs": data ,
            "page_item": page_item,            
      };
      return  param;       
  },
  /**
  * getOnepageItems
  * @param
  *
  * @return
  */   
  getOnepageItems : function(items: any, start: number , end: number): any
  {
      const ret: Array<any> = []
      items.forEach(function(item: any, index){
          if((index >= start) && (index < end )){
              ret.push(item)
          }
  //            console.log( item )
      });
      return ret;
  }   
}
export default LibPagenate;
