<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Balans extends Model
{
   protected $table = 'balans';
   protected $guarded = [];
   public function kashelok()
{
  return $this->belongsTo('App\KashCategor', 'kash_categor_id');
}
}
