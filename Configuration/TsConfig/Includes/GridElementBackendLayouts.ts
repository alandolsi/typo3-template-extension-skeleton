tx_gridelements.setup {
    backend_layout {
        colCount = 4
        rowCount = 3
        rows {
            1 {
                columns {
                    1 {
                        name = Top
                        colspan = 4
                        colPos = 0
                        allowed = text,textpic
                    }
                }
            }

            2 {
                columns {
                    1 {
                        name = Outer Left
                        rowspan = 2
                        colPos = 1
                        allowed = text,textpic
                        allowedGridTypes = 2ColumnContainer,3ColumnContainer
                    }

                    2 {
                        name = Left
                        colPos = 2
                        allowed = *
                    }

                    3 {
                        name = Right
                        colPos = 3
                    }

                    4 {
                        name = Outer Right
                        colPos = 4
                    }
                }
            }

            3 {
                columns {
                    1 {
                        name = Bottom
                        colspan = 4
                        colPos = 5
                    }
                }
            }
        }
    }

    # ID of Element
    twoEqualColumn {
        title = Two equal columns
        config {
            colCount = 2
            rowCount = 1
            rows {
                1 {
                    columns {
                        1 {
                            name = Left
                            colPos = 315
                        }

                        2 {
                            name = Right
                            colPos = 330
                        }
                    }
                }
            }
        }
    }

    threeEqualColumn {
        title = Three equal columns
        config {
            colCount = 3
            rowCount = 1
            rows {
                1 {
                    columns {
                        1 {
                            name = Left
                            colPos = 315
                        }

                        2 {
                            name = Center
                            colPos = 330
                        }

                        3 {
                            name = Center right
                            colPos = 345
                        }
                    }
                }
            }
        }
    }

    fourEqualColumn {
        title = Four equal columns
        config {
            colCount = 4
            rowCount = 1
            rows {
                1 {
                    columns {
                        1 {
                            name = Left
                            colPos = 315
                        }

                        2 {
                            name = Center
                            colPos = 330
                        }

                        3 {
                            name = Center right
                            colPos = 345
                        }

                        4 {
                            name = Right
                            colPos = 360
                        }
                    }
                }
            }
        }
    }
}