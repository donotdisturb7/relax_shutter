<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DbMonitor extends Command
{
    protected $signature = 'db:monitor {--timeout=30}';
    protected $description = 'Monitor database connection';

    public function handle()
    {
        $timeout = $this->option('timeout');
        $this->info("Waiting for database connection (timeout: {$timeout}s)...");
        
        $start = time();
        while (time() - $start < $timeout) {
            try {
                DB::connection()->getPdo();
                $this->info('Database connection successful!');
                return 0;
            } catch (\Exception $e) {
                $this->warn('Waiting for database connection...');
                sleep(1);
            }
        }
        
        $this->error('Database connection failed after timeout!');
        return 1;
    }
}
