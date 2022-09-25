<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use Illuminate\Http\Request;

class SalesController extends Controller
{
     // all sales
     public function index()
     {
         $sales = Sales::all();
         return $sales;
     }
 
     /**
      * Create a new sale instance
      *
      * @param  array  $data
      * @return \App\Models\Sales
      */
     protected function create(SalesStoreRequest $request)
     {
         $sale = Sales::create([
            'order_id' => $request->order_id,
         ]);
         return response()->json('Sales successfully made');
     }
     // edit sales
     public function edit($id)
     {
         $sale = Sales::find($id);
         return response()->json($sale);
     }
     // update sales
     public function update($id, Request $request)
     {
         $sale = Sales::find($id);
         $sale->update($request->all());
         return response()->json('Sales Data successfully updated');
     }
     // delete sales
     public function delete($id)
     {
         $sale = Sales::find($id);
         $sale->delete();
         return response()->json('The sales successfully deleted');
     }
}
