import moment from 'moment';

const LibCommon = {
  /* postgres, date format */
  converDateString: function(value: any): string
  {
    try{
      let ret = "";
      let dtObj = new Date(Number(value));
      let dt = moment(dtObj);      
      ret = dt.format("YYYY-MM-DD");
      return ret;
    } catch (e) {
      console.log(e);
      throw new Error('error, test1');
    }
  },
  /**
  * converDatetimeString
  * @param
  *
  * @return string
  */    
  converDatetimeString: function(value: any): string
  {
    try{
      let ret = "";
      let dtObj = new Date(value);
      let dt = moment(dtObj);      
      ret = dt.format("YYYY-MM-DD HH:mm");
      return ret;
    } catch (e) {
      console.log(e);
      throw new Error('error, converDatetimeString');
    }
  },
  /**
  * converMmddTimeString : MM/DD HH:MI
  * @param
  *
  * @return string
  */    
   converMmddTimeString: function(value: any): string
   {
     try{
       let ret = "";
       let dtObj = new Date(value);
       let dt = moment(dtObj);      
       ret = dt.format("MM-DD HH:mm");
       return ret;
     } catch (e) {
       console.log(e);
       throw new Error('error, converMmddTimeString');
     }
   },  
  /**
  * getDatetimeArray
  * @param items: array
  *
  * @return array | null
  */      
  getDatetimeArray: function(items: any[]): any
  {
    try{
      const ret: any[] = [];
      items.forEach(function (item: any){
        let dtObj = new Date(item.createdAt);
        let dt = moment(dtObj);      
        let dtStr = dt.format("YYYY-MM-DD HH:mm");        
//console.log(item.createdAt);
        item.dt_str = dtStr;
        ret.push(item);
      });
      return ret;
    } catch (e) {
      console.log(e);
      throw new Error('error, getDatetimeArray');
    }
  },
  /**
  * getMmddhmmArray
  * @param items: array
  *
  * @return array | null
  */      
   getMmddhmmArray: function(items: any[]): any
  {
    try{
      const ret: any[] = [];
      items.forEach(function (item: any){
        let dtObj = new Date(item.createdAt);
        let dt = moment(dtObj);      
        let dtStr = dt.format("MM-DD HH:mm");        
//console.log(item.createdAt);
        item.dt_str = dtStr;
        ret.push(item);
      });
      return ret;
    } catch (e) {
      console.log(e);
      throw new Error('error, getDatetimeArray');
    }
  },
  /**
  * getDateArray
  * @param items: array
  *
  * @return array | null
  */      
   getDateArray: function(items: any[]): any
  {
    try{
      const ret: any[] = [];
      items.forEach(function (item: any){
        let dtObj = new Date(item.createdAt);
        let dt = moment(dtObj);      
        let dtStr = dt.format("YYYY-MM-DD");        
//console.log(item.createdAt);
        item.dt_str = dtStr;
        ret.push(item);
      });
      return ret;
    } catch (e) {
      console.log(e);
      throw new Error('error, getDateArray');
    }
  },  
}
export default LibCommon
