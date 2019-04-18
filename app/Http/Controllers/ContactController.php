<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    public function submit(Request $request) {
        // $this->validate($request, [
        //     'name' => 'required|string',
        //     'email' => 'required|email',
        //     'message' => 'required'
        // ]);

        Contact::create($request->all());
       
        return response()->json(null, 200);
    }
}
