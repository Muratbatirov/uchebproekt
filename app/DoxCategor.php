<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DoxCategor extends Model
{
   protected $table = 'doxcategor';
   protected $guarded = [];
   public function doxod() {
    return $this->hasMany('App\Doxod','doxcategor_id');
  }

}
