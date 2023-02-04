<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $superadmin = User::create([
            'name'              => 'Superadmin',
            'email'             => 'superadmin@superadmin.com',
            'password'          => bcrypt('superadmin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $superadmin->assignRole('superadmin');

        // WM

        $yudha = User::create([
            'name'              => 'yudha',
            'email'             => 'yudha@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $yudha->assignRole('admin');

        $krisna = User::create([
            'name'              => 'krisna',
            'email'             => 'krisna@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $krisna->assignRole('admin');

        $alfian = User::create([
            'name'              => 'alfian',
            'email'             => 'alfian@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $alfian->assignRole('admin');

        $syahrul = User::create([
            'name'              => 'syahrul',
            'email'             => 'syahrul@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $syahrul->assignRole('admin');

        $abid = User::create([
            'name'              => 'abid',
            'email'             => 'abid@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $abid->assignRole('admin');

        // FG

        $ehsan = User::create([
            'name'              => 'ehsan',
            'email'             => 'ehsan@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $ehsan->assignRole('admin');

        $soleh = User::create([
            'name'              => 'soleh',
            'email'             => 'soleh@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $soleh->assignRole('admin');

        $ashil = User::create([
            'name'              => 'ashil',
            'email'             => 'ashil@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $ashil->assignRole('admin');

        // RP
        $arman = User::create([
            'name'              => 'arman',
            'email'             => 'arman@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $arman->assignRole('admin');

        $erina = User::create([
            'name'              => 'erina',
            'email'             => 'erina@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $erina->assignRole('admin');

        $harun = User::create([
            'name'              => 'harun',
            'email'             => 'harun@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $harun->assignRole('admin');

        $maya = User::create([
            'name'              => 'maya',
            'email'             => 'maya@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $maya->assignRole('admin');

        // DG

        $afsun = User::create([
            'name'              => 'afsun',
            'email'             => 'afsun@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $afsun->assignRole('admin');

        $shabrina = User::create([
            'name'              => 'shabrina',
            'email'             => 'shabrina@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $shabrina->assignRole('admin');

        // VG
        $elham = User::create([
            'name'              => 'elham',
            'email'             => 'elham@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $elham->assignRole('admin');

        $fuad = User::create([
            'name'              => 'fuad',
            'email'             => 'fuad@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $fuad->assignRole('admin');

        $angger = User::create([
            'name'              => 'angger',
            'email'             => 'angger@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $angger->assignRole('admin');

        $alvira = User::create([
            'name'              => 'alvira',
            'email'             => 'alvira@ent.id',
            'password'          => bcrypt('admin'),
            'email_verified_at' => date('Y-m-d H:i')
        ]);
        $alvira->assignRole('admin');

    }
}
