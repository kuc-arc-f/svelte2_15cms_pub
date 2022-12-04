import LibSqlite from '../lib/LibSqlite';

//type
type TPostItem = {
  id: number,
  name: string,
  createdAt: string,
}
//
const LibCategory = {
  /**
  * getList
  * @param
  *
  * @return
  */
  getList: async function(db : any): Promise<any>
  {
    try{
      let posts: any[] = [];
      const db = await LibSqlite.getDb();
      const sql = `
        SELECT id, name FROM Category;
      `;
      const result = await LibSqlite.select(db, sql);
      if(result === null) {
        return posts;
      }
      const items: any[] = [];
      result.forEach(function (item: any){
        let row: TPostItem = {id: 0, name: "", createdAt: ""};
//console.log(item);
        if(item.length > 0) {
          row.id = item[0];
          row.name = item[1];
          row.createdAt = item[2];
        }
        items.push(row);
      });
      posts = items;
      return posts;
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
    } catch (e) {
      console.error(e);
      throw new Error('Error , get');
    }   
   }, 
}
export default LibCategory;
