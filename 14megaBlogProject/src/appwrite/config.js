import conf from '../conf/conf'

import { Client, Account, ID,TablesDB,Storage,Query } from "appwrite";


export class DatabaseService {
    client = new Client();
    tablesDB;
    storage;

    constructor(){
          this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId);
          this.tablesDB = new TablesDB(this.client)
          this.storage = new Storage(this.client)
    }

    async createPost ({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.tablesDB.createRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteTableId,
                rowId:ID.unique(),
                data:{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        } catch (error) {
           console.log('Appwrite Service :: createPost :: error', error)
        }
    }

    //here we took slug because of that we get to know which doc we have to update
    async updatePost (slug,{title,content,featuredImage,status}) {
        try {
            return await this.tablesDB.updateRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteTableId,
                rowId:slug,
                data:{
                    title,
                    content,
                    featuredImage,
                    status

                }
            })
        } catch (error) {
            console.log('Appwrite Service :: updatePost :: error', error)
        }
    }

    async deletePost (slug){
        try {
            return await this.tablesDB.deleteRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteTableId,
                rowId:slug,
            })
        } catch (error) {
              console.log('Appwrite Service :: deletePost :: error', error)
        }
    }

    async getPost (slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteTableId,
                rowId:slug,
            })
        } catch (error) {
             console.log('Appwrite Service :: deletePost :: error', error)
        }
    }

    async getPosts (){
        try {
            return await this.tablesDB.listRows({
                  databaseId:conf.appwriteDatabaseId,
                  tableId:conf.appwriteTableId,
                   queries: [
                         Query.equal('status', 'active')
                    ]
            })
              
        } catch (error) {
             console.log('Appwrite Service :: getPosts :: error', error)
             return false
        }
    }

    //File Upload Services

    async uploadFile (file) {
        try {
            return await this.storage.createFile({
                 bucketId:conf.appwriteBucketId,
                 fileId: ID.unique(),
                 file: file,
            })
        } catch (error) {
             console.log('Appwrite Service :: uploadFile :: error', error)
        }
    }

    async deleteFile (fileId) {
        try {
            await this.storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })

            return true
        } catch (error) {
             console.log('Appwrite Service :: deleteFile :: error', error)
             return false
        }

       
    }

    getFilePreview (fileId){
        try {
            return this.storage.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            })
        } catch (error) {
             console.log('Appwrite Service :: getFilePreview :: error', error)
        }
    }


}

const databaseService = new DatabaseService()

export default databaseService