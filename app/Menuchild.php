<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menuchild extends Model
{
  protected $table = 'menuchild';
  public function user(){
    return $this->belongsTo('App\Menuchild');
}
  
}
