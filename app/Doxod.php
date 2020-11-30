<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doxod extends Model
{
   protected $table = 'doxod';
   protected $guarded = [];
  
   public function kashelok()
{
  return $this->belongsTo('App\KashCategor', 'kash_categor_id');
}
}
