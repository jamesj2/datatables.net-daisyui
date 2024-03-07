<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render('Users', ['users'=>User::all()]);
    }
}
