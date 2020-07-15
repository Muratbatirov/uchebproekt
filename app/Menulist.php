<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menulist extends Model
{
    protected $table = 'menulist';
    public function children()
  {
    return $this->hasMany('App\Menuchild');
  }
}
