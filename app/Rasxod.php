<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rasxod extends Model
{
   protected $table = 'rasxod';
   protected $guarded = [];
 
   public function kashelok()
{
  return $this->belongsTo('App\KashCategor', 'kash_categor_id');
}
}
