<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BalansControl extends Model
{
    protected $table = 'balanscontrol';
    protected $guarded = [];
   public function kashelok()
{
  return $this->belongsTo('App\KashCategor', 'kash_categor_id');
}
}
