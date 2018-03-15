<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model {
	protected $fillable = [
		'titulo',
		'corpo',
		'categoria'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'created_at',
		'updated_at',
	];

	public function categoria() {
		return $this->belongsTo(Categoria::class );
	}
}
