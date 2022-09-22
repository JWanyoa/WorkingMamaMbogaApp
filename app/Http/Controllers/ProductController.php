<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use App\Http\Requests\ProductStoreRequest;

class ProductController extends Controller
{
     // all products
     public function index()
     {
         $products = Product::all();
         return $products;
     }
 
     /**
      * Create a new product instance
      *
      * @param  array  $data
      * @return \App\Models\Product
      */
     protected function create(ProductStoreRequest $request)
     {
         return Product::create([
            'productname' => $request->productname,
            'productdescription' => $request->productdescription,
            'category_id' => $request->category_id,
            'quantity' => $request->quantity,
            'price' => $request->price,
         ]);
     }
     // edit products
     public function edit($id)
     {
         $product = Product::find($id);
         return response()->json($product);
     }
     // update products
     public function update($id, ProductStoreRequest $request)
     {
         $product = Product::find($id);
         $product->update($request->all());
         return response()->json('Product Data successfully updated');
     }
     // delete products
     public function delete($id)
     {
         $product = Product::find($id);
         $product->delete();
         return response()->json('The products successfully deleted');
     }
}
