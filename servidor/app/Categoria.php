<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model {
	protected $fillable = ['descricao'];

	protected $hidden = [
		'created_at',
		'updated_at',
	];

	public function noticias() {
		return $this->hasMany(Noticia::class );
	}
}
