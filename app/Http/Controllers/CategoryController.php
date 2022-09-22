<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

use App\Http\Requests\CategoryStoreRequest;

use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    // all categories
    public function index()
    {
        // $categories = Category::all()->toArray();
        // return array_reverse($categories);
        $categories = Category::all();
        return $categories;
    }

    /**
     * Create a new category instance
     *
     * @param  array  $data
     * @return \App\Models\Category
     */
    protected function create(CategoryStoreRequest $request)
    {
        return Category::create([
            'categoryname' => $request->categoryname,
            'categorydescription' => $request->categorydescription
        ]);
    }
    // edit categories
    public function edit($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }
    // update categories
    public function update($id, CategoryStoreRequest $request)
    {
        $category = Category::find($id);
        $category->update($request->all());
        return response()->json('Category Data successfully updated');
    }
    // delete categories
    public function delete($id)
    {
        $category = Category::find($id);
        $category->delete();
        return response()->json('The categories successfully deleted');
    }
}
