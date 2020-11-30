<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KashCategor extends Model
{
   protected $table = 'kash_categors';
   protected $guarded = [];
   public function balans() {
    return $this->hasOne('App\Balans','kash_categor_id');
  }
  public function balanscontrol() {
    return $this->hasMany('App\BalansControl','kash_categor_id');
  }
   public function doxod() {
    return $this->hasMany('App\Doxod','kash_categor_id');
  }
  public function rasxod() {
    return $this->hasMany('App\Rasxod','kash_categor_id');
  }
}
