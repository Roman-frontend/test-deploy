"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import {
  CreditCard,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  ArrowDown,
  ArrowUp,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type ProductType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  type: string;
  brand: string;
};

// Sample data
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
  { name: "Jul", sales: 7000 },
];

const repairData = [
  { name: "Jan", repairs: 25 },
  { name: "Feb", repairs: 30 },
  { name: "Mar", repairs: 35 },
  { name: "Apr", repairs: 42 },
  { name: "May", repairs: 38 },
  { name: "Jun", repairs: 45 },
  { name: "Jul", repairs: 50 },
];

const deviceTypeData = [
  { name: "Smartphones", value: 60 },
  { name: "Tablets", value: 25 },
  { name: "Laptops", value: 15 },
];

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
];

const phoneProducts: ProductType[] = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999,
    stock: 15,
    type: "New",
    brand: "Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 899,
    stock: 10,
    type: "New",
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Google Pixel 7",
    price: 599,
    stock: 8,
    type: "New",
    brand: "Google",
  },
  {
    id: 4,
    name: "iPhone 13 (Refurbished)",
    price: 649,
    stock: 5,
    type: "Used",
    brand: "Apple",
  },
  {
    id: 5,
    name: "Samsung Galaxy S22 (Refurbished)",
    price: 599,
    stock: 3,
    type: "Used",
    brand: "Samsung",
  },
  {
    id: 6,
    name: "OnePlus 10 Pro",
    price: 699,
    stock: 0,
    type: "New",
    brand: "OnePlus",
  },
];

const recentRepairs = [
  {
    id: 1,
    customer: "John Smith",
    device: "iPhone 12",
    service: "Screen Replacement",
    status: "Completed",
    date: "2023-07-10",
  },
  {
    id: 2,
    customer: "Emily Johnson",
    device: "Samsung Galaxy S21",
    service: "Battery Replacement",
    status: "In Progress",
    date: "2023-07-09",
  },
  {
    id: 3,
    customer: "Michael Brown",
    device: "iPad Pro",
    service: "Charging Port Repair",
    status: "Waiting for Parts",
    date: "2023-07-08",
  },
  {
    id: 4,
    customer: "Jessica Davis",
    device: "MacBook Air",
    service: "Data Recovery",
    status: "Completed",
    date: "2023-07-07",
  },
  {
    id: 5,
    customer: "David Wilson",
    device: "Google Pixel 6",
    service: "Water Damage Repair",
    status: "In Progress",
    date: "2023-07-06",
  },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredProducts = phoneProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductAction = (action: string, product: ProductType) => {
    switch (action) {
      case "edit":
        toast({
          title: `Editing ${product.name}`,
          description: "Edit form would open here",
        });
        break;
      case "delete":
        toast({
          title: `Deleting ${product.name}`,
          description: "Confirmation dialog would appear",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Revenue
                  </p>
                  <h3 className="text-2xl font-bold">$45,231.89</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-green-500">
                <ArrowUp className="h-4 w-4" />
                <span>12%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Sales
                  </p>
                  <h3 className="text-2xl font-bold">+58</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-green-500">
                <ArrowUp className="h-4 w-4" />
                <span>8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Repairs
                  </p>
                  <h3 className="text-2xl font-bold">+23</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-red-500">
                <ArrowDown className="h-4 w-4" />
                <span>5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Customers
                  </p>
                  <h3 className="text-2xl font-bold">+2,445</h3>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-green-500">
                <ArrowUp className="h-4 w-4" />
                <span>18%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>
              Monthly sales for the last 7 months
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Device Type Distribution</CardTitle>
            <CardDescription>Repair requests by device type</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceTypeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Inventory and Repair Management */}
      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventory">Inventory Management</TabsTrigger>
          <TabsTrigger value="repairs">Repair Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Phone Inventory</h2>
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[300px]"
            />
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-center">Stock</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.type === "New" ? "default" : "outline"
                          }
                        >
                          {product.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell className="text-right">
                        ${product.price}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={
                            product.stock > 0 ? "outline" : "destructive"
                          }
                        >
                          {product.stock > 0 ? product.stock : "Out of Stock"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() =>
                                handleProductAction("edit", product)
                              }
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() =>
                                handleProductAction("delete", product)
                              }
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Add New Product</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="repairs" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Repairs</h2>
            <Button variant="outline">View All Repairs</Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Device</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentRepairs.map((repair) => (
                    <TableRow key={repair.id}>
                      <TableCell className="font-medium">
                        {repair.customer}
                      </TableCell>
                      <TableCell>{repair.device}</TableCell>
                      <TableCell>{repair.service}</TableCell>
                      <TableCell>{repair.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            repair.status === "Completed"
                              ? "outline"
                              : repair.status === "In Progress"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {repair.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Update Status
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Repair Statistics</CardTitle>
              <CardDescription>
                Monthly repair count for the last 7 months
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={repairData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="repairs" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
