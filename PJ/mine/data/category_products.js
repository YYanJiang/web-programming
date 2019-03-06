const mongoCollections = require("../config/mongoCollections");
const category_products = mongoCollections.categoryProducts;

const exportedMethods = {
	async getPostById(category_id){
		const category_productsCollection = await category_products();
		const post = await category_productsCollection.findOne({category_id: category_id});
		if(!post) throw "product not found";
		return post;
	},

	async getPostByKey(key){
		const category_productsCollection = await category_products();
		var reg = new RegExp(key);
		const post = await category_productsCollection.find({names: reg},{"_id":1,names:1});
		if(!post) throw "product not found by the key word";
		return post;
	},

	async getPostByCatKey(category_id,key){
		if (!key || typeof key != "string") throw "You must provide an string to search for";
		const category_productsCollection = await category_products();
		const arr = await category_productsCollection.find({ category_id: category_id});
		var reg = new RegExp(key);
		var n = 0;
		var getPost = [];
		arr.names.forEach(function(element) {
		  if(element.test(reg)){
			n = arr.names.indexOf(element,n+1);
			getPost.push({priduct_ids: priduct_ids[n], names: names[n]});
		  }
		  return getPost;
		});
	},



	async addPost(category_id, product_id, name){
		const category_productsCollection = await category_products();
		let product_idList = [];
		let nameList = [];
		product_idList.push(product_id);
		nameList.push(name);
		const newPost = {
			category_id: category_id,
			product_ids: product_idList,
			names: nameList
		};
		const newPostInfo = await category_productsCollection.insertOne(newPost);
		return newPost;
	},

	async updatePost(category_id, product_id, name){
		const category_productsCollection = await category_products();
		const updatePostData = {};
		oldPost = await this.getPostById(category_id);
		
		let newIdList = oldPost.product_ids;
		let newNameList = oldPost.names;
		newIdList.push(product_id);
		newNameList.push(name);

		updatePostData.product_ids = newIdList;
		updatePostData.names = newNameList;
	
		let updateCommand = {
	      $set: updatePostData
	    };

	    await category_productsCollection.updateOne({"category_id": category_id}, updateCommand);
	    return await this.getPostById(category_id);
	}
}

module.exports = exportedMethods;