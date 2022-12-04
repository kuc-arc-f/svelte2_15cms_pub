import LibSqlite from '../lib/LibSqlite';
import LibPagenate from '../lib/LibPagenate';

//type
type TPostItem = {
  id: number,
  title: string,
  content: string,
  createdAt: string,
  categoryName: string, 
}
//
const LibPost = {
  /**
  * getList
  * @param db : any
  * @param page: number
  *
  * @return
  */
  getList: async function(db : any, page: number): Promise<any>
  {
    try{
      let posts: any[] = [];
      const pageItem = LibPagenate.getPageStart(page);
//console.log(pageItem);
      //
      const db = await LibSqlite.getDb();
      const sql = `
      select
      Post.id ,
      Post.title,
      Post.content,
      Post.createdAt,
      Category.name
      from Post
      LEFT OUTER JOIN Category
      ON Post.CategoryId = Category.id
      ORDER BY Post.id DESC
      limit ${LibPagenate.per_page} offset ${pageItem.start}
      ;
      `;
  console.log(sql);
      const result = await LibSqlite.select(db, sql);
      if(result === null) {
        return posts;
      }
//console.log(result);
      let items: any[] = [];
      items = this.getPostArray(result);
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
      let post: any = {};
      const sql = `
      select
      Post.id ,
      Post.title,
      Post.content,
      Post.createdAt,
      Category.name
      from Post
      LEFT OUTER JOIN Category
      ON Post.CategoryId = Category.id
      WHERE 
      Post.id = ${id};
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
  /**
  * getPostArray
  * @param result : any
  *
  * @return 
  */
   getPostArray:  function(result : any): any
   {
     try{
       let posts: any[] = [];
 //console.log(result);
       const items: any[] = [];
       result.forEach(function (item: any){
         let row: TPostItem = {
           id: 0, title: "", content: "", createdAt: "", categoryName: "",
         };
 //console.log(item);
         if(item.length > 0) {
           row.id = item[0];
           row.title = item[1];
           row.content = item[2];
           row.createdAt = item[3];
           row.categoryName = item[4];
         }
         items.push(row);
       });
       posts = items;
       return posts;
     } catch (e) {
       console.error(e);
       throw new Error('Error , getPostArray');
     }   
   },
  /**
  * getCatgoryItems
  * @param
  *
  * @return
  */
   getCatgoryItems: async function(db : any, id: number): Promise<any>
   {
     try{
       let posts: any[] = [];
       const db = await LibSqlite.getDb();
       const sql = `
       select
       Post.id ,
       Post.title,
       Post.content,
       Post.createdAt,
       Category.name
       from Post
       LEFT OUTER JOIN Category
       ON Post.CategoryId = Category.id
       WHERE Post.CategoryId = ${id}
       ORDER BY Post.id DESC
       ;
       `;
       const result = await LibSqlite.select(db, sql);
       if(result === null) {
         return posts;
       }
       let items: any[] = [];
       items = this.getPostArray(result);
//console.log(items);
       posts = items;
       return posts;
     } catch (e) {
       console.error(e);
       throw new Error('Error , getList');
     }   
   },
  /**
  * getSearchItems
  * @param
  *
  * @return
  */
  getSearchItems: async function(db : any, key: string): Promise<any>
  {
     try{
       let posts: any[] = [];
       const db = await LibSqlite.getDb();
       const sql = `
       select
       Post.id ,
       Post.title,
       Post.content,
       Post.createdAt,
       Category.name
       from Post
       LEFT OUTER JOIN Category
       ON Post.CategoryId = Category.id
       WHERE Post.title LIKE '%${key}%'
       ORDER BY Post.id DESC
       ;
       `;
       const result = await LibSqlite.select(db, sql);
       if(result === null) {
         return posts;
       }
       let items: any[] = [];
       items = this.getPostArray(result);
//console.log(items);
       posts = items;
       return posts;
     } catch (e) {
       console.error(e);
       throw new Error('Error , getSearchItems');
     }   
   }, 
}
export default LibPost;
