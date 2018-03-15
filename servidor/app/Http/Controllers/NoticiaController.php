<?php

namespace App\Http\Controllers;

use App\Noticia;
use Illuminate\Http\Request;

class NoticiaController extends Controller {
	public function getList() {
		return Noticia::all();
	}

	public function get($id) {
		return Noticia::with('categoria')->find($id);
	}

	public function create(Request $request) {
		$noticia = Noticia::create($request->all());

		return response()->json($noticia, 201);
	}

	public function update(Request $request, Noticia $noticia) {
		$noticia->update($request->all());

		return response()->json($noticia, 200);
	}

	public function delete(Noticia $noticia) {
		$noticia->delete();

		return response()->json(null, 204);
	}
}
