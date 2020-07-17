<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RasCategor extends Model
{
   protected $table = 'rascategor';
   protected $guarded = [];
   public function rasxod() {
    return $this->hasMany('App\Rasxod');
  }
}
