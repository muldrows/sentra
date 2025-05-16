import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

export default function Sentra() {
  const [service, setService] = useState('payments-api');

  return (
    <div className="p-6 space-y-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Sentra</h1>
      <Input
        placeholder="Search services..."
        className="w-full"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <Tabs defaultValue="logs" className="w-full">
        <TabsList>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="deploys">Deployments</TabsTrigger>
          <TabsTrigger value="health">Env Health</TabsTrigger>
          <TabsTrigger value="warnings">Preflight Checks</TabsTrigger>
        </TabsList>

        <TabsContent value="logs">
          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Filtered Logs for {service}</h2>
              <pre className="bg-black text-green-300 p-4 rounded text-sm overflow-auto">
                [2025-05-14 12:03:12] ERROR - TimeoutException in /payment/process
                [2025-05-14 12:04:15] INFO - Retry triggered successfully
                [2025-05-14 12:04:45] WARN - Slow response time detected
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deploys">
          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Recent Deployments for {service}</h2>
              <ul className="space-y-1 text-sm">
                <li>✅ v1.3.2 - Deployed May 13 @ 9:42 PM - GitHub Actions</li>
                <li>✅ v1.3.1 - Deployed May 10 @ 6:18 PM - GitHub Actions</li>
                <li>❌ v1.3.0 - Failed May 8 @ 7:00 PM - CI Timeout</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health">
          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Environment Health - {service}</h2>
              <ul className="text-sm">
                <li>🌿 Dev: Healthy - 3 pods running</li>
                <li>🌿 Staging: Healthy - 2 pods running</li>
                <li>🔥 Production: Warning - 1 pod restarted recently</li>
              </ul>
              <Button variant="destructive">Restart Production Pod</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warnings">
          <Card>
            <CardContent className="space-y-2">
              <h2 className="text-xl font-semibold">Preflight Warnings for {service}</h2>
              <ul className="text-sm text-yellow-700">
                <li>⚠️ Missing timeout configuration for external API call</li>
                <li>⚠️ High cyclomatic complexity in /checkout route</li>
                <li>⚠️ No automated test coverage for critical path: /order/submit</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
