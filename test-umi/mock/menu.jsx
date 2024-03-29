export const getMenuData = {
  "data":[
      {
          "name":"首页",
          "icon":"home",
          "path":"/home",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"工作台",
                  "path":"/home/workplace",
                  "operatecodes":[
                      "R1"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"产品管理",
          "icon":"barcode",
          "path":"/product",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"产品审核",
                  "path":"/product/goodsaudit",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4",
                      "O8",
                      "O16"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"外部产品映射",
                  "path":"/product/goodsmapping",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "D8",
                      "O16"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"产品管理",
                  "path":"/product/goods",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "D8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024",
                      "O2048",
                      "O4096"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"入库管理",
          "icon":"down-circle",
          "path":"/putin-storage",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"入库单管理",
                  "path":"/putin-storage/prediction",
                  "operatecodes":[
                      "R1",
                      "U2",
                      "O4",
                      "O8",
                      "C16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024",
                      "O2048",
                      "O4096"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"FBA退货处理",
                  "path":"/putin-storage/fbareceipt",
                  "operatecodes":[
                      "R1",
                      "U2",
                      "C4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024",
                      "O2048",
                      "O4096",
                      "O8192",
                      "O16384",
                      "O32768"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"FBA收货单审核",
                  "path":"/putin-storage/fbareceiptcheck",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4",
                      "O8"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"客户-无账号入库单",
                  "path":"/putin-storage/noaccount",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"客服-无客户入库单",
                  "path":"/putin-storage/clientless",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"出库管理",
          "icon":"up-circle",
          "path":"/putout-storage",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"中转出库管理",
                  "path":"/putout-storage/transfer-sendout",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"客户订单管理",
                  "path":"/putout-storage/client-order",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024",
                      "O2048",
                      "O4096",
                      "O8192"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"中转出库拼单",
                  "path":"/putout-storage/tansfer-sendout-share",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024",
                      "O2048"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"库存管理",
          "icon":"table",
          "path":"/stock",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"产品库存查询",
                  "path":"/stock/inventory-list",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"箱库存查询",
                  "path":"/stock/boxinventory-list",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"卡板库存查询(新)",
                  "path":"/stock/trayinventorynew-list",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"出入库明细",
                  "path":"/stock/inventoryLog",
                  "operatecodes":[
                      "R1"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"库龄报表",
                  "path":"/stock/warehouseage",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"库存报表",
                  "path":"/stock/inventoryreportservice-list",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"结算管理",
          "icon":"pay-circle-o",
          "path":"/settlement",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"应收",
                  "path":"/settlement/receivable",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"手工应收",
                          "path":"/settlement/receivable/manual-receivable",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8",
                              "O16",
                              "O32"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"收款管理",
                          "path":"/settlement/receivable/cheques-payable",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"费用账单",
                  "path":"/settlement/costBill",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"费用明细",
                          "path":"/settlement/costBill/details-of-charges",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"客户账单",
                          "path":"/settlement/costBill/customer-bill",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"费用账单",
                          "path":"/settlement/costBill/cost-administration",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"仓租账单",
                          "path":"/settlement/costBill/warehouse-rent",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"FBA费用账单",
                          "path":"/settlement/costBill/fba-cost-administration",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"基础设置",
                  "path":"/settlement/basicSetting",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"财务设置",
                          "path":"/settlement/basicSetting/financial-setting",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      }
                  ]
              }
          ]
      },
      {
          "name":"客户管理",
          "icon":"team",
          "path":"/customer",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"客户管理",
                  "path":"/customer/client",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4",
                      "O8",
                      "O16",
                      "C32",
                      "U64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024",
                      "O2048"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"客户审核",
                  "path":"/customer/client-audit",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "U4",
                      "O8",
                      "O16"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"费用管理",
          "icon":"tags",
          "path":"/cost",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"基础设置",
                  "path":"/cost/basics",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"物流商管理",
                          "path":"/cost/basics/provider",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"API授权",
                          "path":"/cost/basics/apiservice",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"计费设置",
                  "path":"/cost/billingSetting",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"特殊规则设置",
                          "path":"/cost/billingSetting/specialRules",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16",
                              "O32"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"分区设置",
                          "path":"/cost/billingSetting/partition",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8",
                              "D16",
                              "O32",
                              "O64",
                              "O128"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"重量段设置",
                          "path":"/cost/billingSetting/weightsection",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "O4",
                              "U8",
                              "D16",
                              "O32",
                              "O64"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"物流成本设置",
                          "path":"/cost/billingSetting/costfee",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16",
                              "O32",
                              "O64"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"物流价格设置",
                          "path":"/cost/billingSetting/pricefee",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16",
                              "O32",
                              "O64"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"物流价格套餐",
                          "path":"/cost/billingSetting/pricepackage",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"物流方式管理",
                          "path":"/cost/billingSetting/logisticsway",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"操作费设置",
                          "path":"/cost/billingSetting/operatefee",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"仓租设置",
                          "path":"/cost/billingSetting/warehousecharges",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      }
                  ]
              }
          ]
      },
      {
          "name":"我的帐号",
          "icon":"user",
          "path":"/my-account",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"财务管理",
                  "path":"/my-account/finance",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"客户对账单",
                  "path":"/my-account/clientbill",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"FBA退货单费用明细",
                  "path":"/my-account/fbachargedetail",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"中转订单费用明细",
                  "path":"/my-account/transferdetail",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "C4",
                      "U8",
                      "O16"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"客户订单费用明细",
                  "path":"/my-account/clientorderdetail",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"其他费用明细",
                  "path":"/my-account/restsdetail",
                  "operatecodes":[
                      "R1",
                      "O2"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"仓租费用明细",
                  "path":"/my-account/mywarehouserent",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "O4"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"换标管理",
          "icon":"copyright",
          "path":"/changelabel",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"换标管理",
                  "path":"/changelabel/changelabelmanage",
                  "operatecodes":[
                      "R1",
                      "C2",
                      "U4",
                      "O8",
                      "O16",
                      "O32"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"销毁管理",
          "icon":"copyright",
          "path":"/destroy",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"客户-销毁管理",
                  "path":"/destroy/customerdestroyorder",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "U4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"销毁订单",
                  "path":"/destroy/destroyorder",
                  "operatecodes":[
                      "R1",
                      "O2",
                      "U4",
                      "O8",
                      "O16",
                      "O32",
                      "O64",
                      "O128",
                      "O256",
                      "O512",
                      "O1024"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"个人中心",
          "icon":"crown",
          "path":"/personal",
          "operatecodes":[

          ],
          "children":[
              {
                  "name":"租户信息",
                  "path":"/personal/tenementInfo",
                  "operatecodes":[
                      "R1",
                      "U4",
                      "O8"
                  ],
                  "children":[

                  ]
              },
              {
                  "name":"我的信息",
                  "path":"/personal/my-information",
                  "operatecodes":[
                      "R1",
                      "U4",
                      "O8"
                  ],
                  "children":[

                  ]
              }
          ]
      },
      {
          "name":"系统设置",
          "icon":"setting",
          "path":"/system",
          "operatecodes":[
              "R1"
          ],
          "children":[
              {
                  "name":"基础数据",
                  "path":"/system/basics",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"国家管理",
                          "path":"/system/basics/country",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"州省管理",
                          "path":"/system/basics/provice",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"城市管理",
                          "path":"/system/basics/city",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"数据字典",
                          "path":"/system/basics/datadictionary",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"汇率管理",
                          "path":"/system/basics/exchange-rate",
                          "operatecodes":[
                              "R1",
                              "C2"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"地址管理",
                          "path":"/system/basics/address",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"品类管理",
                          "path":"/system/basics/category",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"费用项目",
                          "path":"/system/basics/cost-type",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"授权管理",
                          "path":"/system/basics/apiauth",
                          "operatecodes":[
                              "R1",
                              "O2",
                              "O4",
                              "O8",
                              "D16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"账号设置",
                          "path":"/system/basics/setchannel",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"权限管理",
                  "path":"/system/permission",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"菜单管理",
                          "path":"/system/permission/menutree",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"操作管理",
                          "path":"/system/permission/menu-auth",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8",
                              "O16"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"用户管理",
                          "path":"/system/permission/user",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8",
                              "O16",
                              "O32",
                              "O64",
                              "O128"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"角色管理",
                          "path":"/system/permission/role",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "O8",
                              "D16",
                              "O32",
                              "O64"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"部门管理",
                          "path":"/system/permission/department",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"消息管理",
                  "path":"/system/noticetype",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"系统公告",
                          "path":"/system/noticetype/broadcast",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"系统配置",
                  "path":"/system/configuration",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"服务同步管理",
                          "path":"/system/configuration/service",
                          "operatecodes":[
                              "R1",
                              "U2"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"邮箱配置",
                          "path":"/system/configuration/mailbox",
                          "operatecodes":[
                              "R1",
                              "U2",
                              "C4"
                          ],
                          "children":[

                          ]
                      }
                  ]
              },
              {
                  "name":"仓库管理",
                  "path":"/system/inventory",
                  "operatecodes":[

                  ],
                  "children":[
                      {
                          "name":"仓库管理",
                          "path":"/system/inventory/warehouse",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4",
                              "D8"
                          ],
                          "children":[

                          ]
                      },
                      {
                          "name":"库位类型",
                          "path":"/system/inventory/alibrary-type",
                          "operatecodes":[
                              "R1",
                              "C2",
                              "U4"
                          ],
                          "children":[

                          ]
                      }
                  ]
              }
          ]
      }
  ],
  "status":"success"
}