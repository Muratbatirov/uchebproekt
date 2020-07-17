<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
     public function balans()
  {
    return $this->hasOne('App\Balans');
  }
  public function doxod() {
    return $this->hasMany('App\Doxod');
  }
  public function rasxod() {
    return $this->hasMany('App\Rasxod');
  }
  public function doxcategor() {
    return $this->hasMany('App\DoxCategor');
  }
  public function rascategor() {
    return $this->hasMany('App\RasCategor');
  }

}
