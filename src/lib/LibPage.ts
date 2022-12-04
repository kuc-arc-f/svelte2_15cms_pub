import LibSqlite from '../lib/LibSqlite';

//type
/*
type TPostItem = {
  id: number,
  title: string,
  content: string,
  createdAt: string,
}
*/
//
const LibPage = {
  /**
  * getList
  * @param
  *
  * @return
  */
  getList: async function(db: any): Promise<any>
  {
    try{
      let pages: any[] = [];
      const sql = `
      SELECT id, title, content, createdAt FROM Page
      ORDER BY id DESC;
      `;
      const result = await LibSqlite.select(db, sql);
      if(result === null) {
        return;
      }
      console.log(result);
      let items: any[] = [];
      result.forEach(function (item: any){
        let row = {id: 0, title: "", content: "", createdAt: ""};
//console.log(item);
        if(item.length > 0) {
          row.id = item[0];
          row.title = item[1];
          row.content = item[2];
          row.createdAt = item[3];
        }
        items.push(row);
      });
//      items = LibCommon.getDatetimeArray(items);
      pages = items;      
      return pages;
    } catch (e) {
      console.error(e);
      throw new Error('Error , getList');
    }   
  },
  /**
  * get
  * @param
  *
  * @return
  */
   get: async function(db : any, id: number): Promise<any>
   {
    try{
      let post: any = {};
      const sql = `
      SELECT id, title, content, createdAt from Page WHERE
      id = ${id};
      `;
      let item = await LibSqlite.select(db, sql);
      item = item[0];
      let row: any = {
        id: 0, title: "", content: "", createdAt: "", categoryName: "",
      };
      if(item.length > 0) {
        row.id = item[0];
        row.title = item[1];
        row.content = item[2];
        row.createdAt = item[3];
        row.categoryName = item[4];
      }      
      post = row;
//console.log(row);
      return post;      
    } catch (e) {
      console.error(e);
      throw new Error('Error , get');
    }   
   }, 
}
export default LibPage;
