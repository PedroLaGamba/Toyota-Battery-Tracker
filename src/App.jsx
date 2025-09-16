import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { Battery, Car, Recycle, Shield, QrCode, Home, Building, Factory } from 'lucide-react'
import QRCode from 'react-qr-code'
import './App.css'

// Componente Home
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Car className="h-12 w-12 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Toyota Battery Tracker</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema blockchain para rastreamento sustentável de baterias de carros híbridos, 
            promovendo os 3 Rs: Reduzir, Reutilizar e Reciclar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Transparência Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Rastreamento imutável do ciclo de vida completo das baterias na blockchain.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Recycle className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle>Sustentabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Incentivos para descarte correto e reutilização de baterias através de tokenização.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <QrCode className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <CardTitle>Acesso Fácil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                QR Code em cada bateria para consulta instantânea do histórico público.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Acesse seu Painel</h2>
          <div className="flex justify-center space-x-4">
            <Link to="/toyota">
              <Button className="bg-red-600 hover:bg-red-700">
                <Building className="h-4 w-4 mr-2" />
                Painel Toyota
              </Button>
            </Link>
            <Link to="/dealer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Home className="h-4 w-4 mr-2" />
                Painel Concessionária
              </Button>
            </Link>
            <Link to="/recycler">
              <Button className="bg-green-600 hover:bg-green-700">
                <Factory className="h-4 w-4 mr-2" />
                Painel Reciclagem
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente Toyota Dashboard
function ToyotaDashboard() {
  const [newBattery, setNewBattery] = useState({ id: '', manufactureDate: '' })
  const [healthUpdate, setHealthUpdate] = useState({ id: '', soh: '', cycles: '' })
  const [incentive, setIncentive] = useState({ batteryId: '', recipient: '', amount: '' })

  const mockBatteries = [
    { id: 'TOY-HYB-001-BAT-001', owner: '0x123...abc', soh: 95, cycles: 150, status: 'Ativo' },
    { id: 'TOY-HYB-002-BAT-002', owner: '0x456...def', soh: 78, cycles: 890, status: 'Ativo' },
    { id: 'TOY-HYB-003-BAT-003', owner: '0x789...ghi', soh: 45, cycles: 1250, status: 'Descartada' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Car className="h-8 w-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold">Painel de Controle Toyota</h1>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="register">Registrar Bateria</TabsTrigger>
            <TabsTrigger value="health">Atualizar Saúde</TabsTrigger>
            <TabsTrigger value="incentives">Incentivos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total de Baterias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+12% desde o mês passado</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">SoH Médio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">82%</div>
                  <p className="text-xs text-muted-foreground">-2% desde o mês passado</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Baterias Descartadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+8% desde o mês passado</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Reutilizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+15% desde o mês passado</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Baterias Registradas</CardTitle>
                <CardDescription>Lista de todas as baterias no sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID da Bateria</TableHead>
                      <TableHead>Proprietário</TableHead>
                      <TableHead>SoH</TableHead>
                      <TableHead>Ciclos</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockBatteries.map((battery) => (
                      <TableRow key={battery.id}>
                        <TableCell className="font-medium">{battery.id}</TableCell>
                        <TableCell>{battery.owner}</TableCell>
                        <TableCell>
                          <Badge variant={battery.soh > 80 ? 'default' : battery.soh > 50 ? 'secondary' : 'destructive'}>
                            {battery.soh}%
                          </Badge>
                        </TableCell>
                        <TableCell>{battery.cycles}</TableCell>
                        <TableCell>
                          <Badge variant={battery.status === 'Ativo' ? 'default' : 'secondary'}>
                            {battery.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Registrar Nova Bateria</CardTitle>
                <CardDescription>Adicione uma nova bateria ao sistema blockchain</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="batteryId">ID da Bateria</Label>
                    <Input
                      id="batteryId"
                      placeholder="TOY-HYB-XXX-BAT-XXX"
                      value={newBattery.id}
                      onChange={(e) => setNewBattery({...newBattery, id: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="manufactureDate">Data de Fabricação</Label>
                    <Input
                      id="manufactureDate"
                      type="date"
                      value={newBattery.manufactureDate}
                      onChange={(e) => setNewBattery({...newBattery, manufactureDate: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="w-full">
                  <Battery className="h-4 w-4 mr-2" />
                  Registrar Bateria
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Atualizar Saúde da Bateria</CardTitle>
                <CardDescription>Atualize os dados de SoH e ciclos via oráculo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="healthBatteryId">ID da Bateria</Label>
                    <Input
                      id="healthBatteryId"
                      placeholder="TOY-HYB-XXX-BAT-XXX"
                      value={healthUpdate.id}
                      onChange={(e) => setHealthUpdate({...healthUpdate, id: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="soh">SoH (%)</Label>
                    <Input
                      id="soh"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="85"
                      value={healthUpdate.soh}
                      onChange={(e) => setHealthUpdate({...healthUpdate, soh: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cycles">Ciclos</Label>
                    <Input
                      id="cycles"
                      type="number"
                      placeholder="500"
                      value={healthUpdate.cycles}
                      onChange={(e) => setHealthUpdate({...healthUpdate, cycles: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Atualizar Dados
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="incentives" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emitir Incentivos</CardTitle>
                <CardDescription>Recompense o descarte correto e reutilização</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="incentiveBatteryId">ID da Bateria</Label>
                    <Input
                      id="incentiveBatteryId"
                      placeholder="TOY-HYB-XXX-BAT-XXX"
                      value={incentive.batteryId}
                      onChange={(e) => setIncentive({...incentive, batteryId: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Destinatário</Label>
                    <Input
                      id="recipient"
                      placeholder="0x123...abc"
                      value={incentive.recipient}
                      onChange={(e) => setIncentive({...incentive, recipient: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Valor (Tokens)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={incentive.amount}
                      onChange={(e) => setIncentive({...incentive, amount: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="w-full">
                  <Recycle className="h-4 w-4 mr-2" />
                  Emitir Incentivo
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Componente Dealer Dashboard
function DealerDashboard() {
  const [transfer, setTransfer] = useState({ batteryId: '', newOwner: '' })
  const [maintenance, setMaintenance] = useState({ batteryId: '', details: '' })

  const dealerBatteries = [
    { id: 'TOY-HYB-004-BAT-004', soh: 92, cycles: 200, status: 'Em Estoque' },
    { id: 'TOY-HYB-005-BAT-005', soh: 88, cycles: 350, status: 'Vendida' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Home className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold">Painel da Concessionária</h1>
        </div>

        <Tabs defaultValue="inventory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inventory">Inventário</TabsTrigger>
            <TabsTrigger value="transfer">Transferir</TabsTrigger>
            <TabsTrigger value="maintenance">Manutenção</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Baterias em Estoque</CardTitle>
                <CardDescription>Baterias sob responsabilidade da concessionária</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID da Bateria</TableHead>
                      <TableHead>SoH</TableHead>
                      <TableHead>Ciclos</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dealerBatteries.map((battery) => (
                      <TableRow key={battery.id}>
                        <TableCell className="font-medium">{battery.id}</TableCell>
                        <TableCell>
                          <Badge variant={battery.soh > 80 ? 'default' : 'secondary'}>
                            {battery.soh}%
                          </Badge>
                        </TableCell>
                        <TableCell>{battery.cycles}</TableCell>
                        <TableCell>
                          <Badge variant={battery.status === 'Em Estoque' ? 'default' : 'secondary'}>
                            {battery.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Link to={`/battery/${battery.id}`}>
                            <Button variant="outline" size="sm">
                              <QrCode className="h-4 w-4 mr-1" />
                              Ver QR
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transfer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transferir Propriedade</CardTitle>
                <CardDescription>Transfira uma bateria para um cliente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="transferBatteryId">ID da Bateria</Label>
                    <Select value={transfer.batteryId} onValueChange={(value) => setTransfer({...transfer, batteryId: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma bateria" />
                      </SelectTrigger>
                      <SelectContent>
                        {dealerBatteries.map((battery) => (
                          <SelectItem key={battery.id} value={battery.id}>{battery.id}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newOwner">Novo Proprietário</Label>
                    <Input
                      id="newOwner"
                      placeholder="0x123...abc"
                      value={transfer.newOwner}
                      onChange={(e) => setTransfer({...transfer, newOwner: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="w-full">
                  <Car className="h-4 w-4 mr-2" />
                  Transferir Bateria
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Registrar Manutenção</CardTitle>
                <CardDescription>Documente serviços realizados na bateria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="maintenanceBatteryId">ID da Bateria</Label>
                  <Select value={maintenance.batteryId} onValueChange={(value) => setMaintenance({...maintenance, batteryId: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma bateria" />
                    </SelectTrigger>
                    <SelectContent>
                      {dealerBatteries.map((battery) => (
                        <SelectItem key={battery.id} value={battery.id}>{battery.id}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maintenanceDetails">Detalhes da Manutenção</Label>
                  <Textarea
                    id="maintenanceDetails"
                    placeholder="Descreva os serviços realizados..."
                    value={maintenance.details}
                    onChange={(e) => setMaintenance({...maintenance, details: e.target.value})}
                  />
                </div>
                <Button className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Registrar Manutenção
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Componente Recycler Dashboard
function RecyclerDashboard() {
  const [disposal, setDisposal] = useState({ batteryId: '', reason: '' })
  const [reuse, setReuse] = useState({ batteryId: '', canReuse: false })

  const receivedBatteries = [
    { id: 'TOY-HYB-003-BAT-003', soh: 45, cycles: 1250, status: 'Recebida', canReuse: false },
    { id: 'TOY-HYB-006-BAT-006', soh: 65, cycles: 980, status: 'Avaliando', canReuse: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Factory className="h-8 w-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold">Painel de Reciclagem</h1>
        </div>

        <Tabs defaultValue="received" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="received">Baterias Recebidas</TabsTrigger>
            <TabsTrigger value="disposal">Registrar Descarte</TabsTrigger>
            <TabsTrigger value="reuse">Avaliar Reutilização</TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Baterias para Processamento</CardTitle>
                <CardDescription>Baterias recebidas para descarte ou reutilização</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID da Bateria</TableHead>
                      <TableHead>SoH</TableHead>
                      <TableHead>Ciclos</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Pode Reutilizar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {receivedBatteries.map((battery) => (
                      <TableRow key={battery.id}>
                        <TableCell className="font-medium">{battery.id}</TableCell>
                        <TableCell>
                          <Badge variant={battery.soh > 50 ? 'secondary' : 'destructive'}>
                            {battery.soh}%
                          </Badge>
                        </TableCell>
                        <TableCell>{battery.cycles}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{battery.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={battery.canReuse ? 'default' : 'secondary'}>
                            {battery.canReuse ? 'Sim' : 'Não'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disposal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Registrar Descarte Final</CardTitle>
                <CardDescription>Documente o descarte definitivo da bateria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="disposalBatteryId">ID da Bateria</Label>
                    <Select value={disposal.batteryId} onValueChange={(value) => setDisposal({...disposal, batteryId: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma bateria" />
                      </SelectTrigger>
                      <SelectContent>
                        {receivedBatteries.map((battery) => (
                          <SelectItem key={battery.id} value={battery.id}>{battery.id}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disposalReason">Motivo do Descarte</Label>
                    <Select value={disposal.reason} onValueChange={(value) => setDisposal({...disposal, reason: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fim-vida-util">Fim da vida útil</SelectItem>
                        <SelectItem value="dano-irreparavel">Dano irreparável</SelectItem>
                        <SelectItem value="baixa-performance">Baixa performance</SelectItem>
                        <SelectItem value="recall">Recall do fabricante</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full">
                  <Recycle className="h-4 w-4 mr-2" />
                  Registrar Descarte
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reuse" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Avaliar para Reutilização</CardTitle>
                <CardDescription>Determine se a bateria pode ser reutilizada</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reuseBatteryId">ID da Bateria</Label>
                    <Select value={reuse.batteryId} onValueChange={(value) => setReuse({...reuse, batteryId: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma bateria" />
                      </SelectTrigger>
                      <SelectContent>
                        {receivedBatteries.map((battery) => (
                          <SelectItem key={battery.id} value={battery.id}>{battery.id}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="canReuse">Pode ser Reutilizada?</Label>
                    <Select value={reuse.canReuse.toString()} onValueChange={(value) => setReuse({...reuse, canReuse: value === 'true'})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Sim, pode ser reutilizada</SelectItem>
                        <SelectItem value="false">Não, deve ser descartada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full">
                  <Battery className="h-4 w-4 mr-2" />
                  Salvar Avaliação
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Componente Public Battery History
function PublicBatteryHistory() {
  const batteryId = 'TOY-HYB-001-BAT-001' // Em uma aplicação real, isso viria da URL

  const batteryData = {
    id: 'TOY-HYB-001-BAT-001',
    manufactureDate: '2023-01-15',
    currentOwner: 'Cliente Final',
    soh: 95,
    cycles: 150,
    maintenanceHistory: 'Inspeção inicial - 2023-01-15; Verificação de rotina - 2023-06-15',
    isDisposed: false,
    canBeReused: false
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <QrCode className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Histórico da Bateria</h1>
            <p className="text-gray-600">Informações públicas registradas na blockchain</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">ID da Bateria</Label>
                    <p className="font-mono text-sm">{batteryData.id}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Data de Fabricação</Label>
                    <p>{new Date(batteryData.manufactureDate).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Proprietário Atual</Label>
                    <p>{batteryData.currentOwner}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estado de Saúde</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">SoH (State of Health)</Label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${batteryData.soh}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{batteryData.soh}%</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Ciclos de Carga</Label>
                    <p className="text-2xl font-bold">{batteryData.cycles}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status de Sustentabilidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant={!batteryData.isDisposed ? 'default' : 'secondary'}>
                      {!batteryData.isDisposed ? 'Em Uso' : 'Descartada'}
                    </Badge>
                    {batteryData.canBeReused && (
                      <Badge variant="outline">Pode ser Reutilizada</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>QR Code</CardTitle>
                  <CardDescription>Escaneie para acessar este histórico</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <QRCode 
                      value={`https://toyota-battery-tracker.com/battery/${batteryData.id}`}
                      size={200}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Manutenção</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {batteryData.maintenanceHistory.split(';').map((maintenance, index) => (
                      <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                        {maintenance.trim()}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente principal da aplicação
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Car className="h-6 w-6 text-red-600" />
                <span className="font-bold text-lg">Toyota Battery Tracker</span>
              </Link>
              <div className="flex space-x-4">
                <Link to="/toyota">
                  <Button variant="ghost" size="sm">Toyota</Button>
                </Link>
                <Link to="/dealer">
                  <Button variant="ghost" size="sm">Concessionária</Button>
                </Link>
                <Link to="/recycler">
                  <Button variant="ghost" size="sm">Reciclagem</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toyota" element={<ToyotaDashboard />} />
          <Route path="/dealer" element={<DealerDashboard />} />
          <Route path="/recycler" element={<RecyclerDashboard />} />
          <Route path="/battery/:id" element={<PublicBatteryHistory />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

