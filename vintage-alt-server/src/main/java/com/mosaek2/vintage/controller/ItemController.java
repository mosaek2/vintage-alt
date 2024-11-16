package com.mosaek2.vintage.controller;

import com.mosaek2.vintage.domain.Item;
import com.mosaek2.vintage.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ItemController {
    private ItemService service;

    @Autowired
    public ItemController(ItemService service) {
        this.service = service;
    }

    @GetMapping("/items")
    public ResponseEntity<?> getItemList(@RequestParam(value = "c1") String c1,
                                         @RequestParam(value = "c2") String c2,
                                         @RequestParam(value = "c3") String c3,
                                         @RequestParam(value = "sort") String sort) {
        List<Item> foundList = new ArrayList<>();

        if (sort.equals("new")) {
            if (c2.equals("")) {
                foundList = service.findItemsByCategory1(c1);
            } else if (c3.equals("")) {
                foundList = service.findItemsByCategory2(c1, c2);
            } else {
                foundList = service.findItemByCategory3(c1, c2, c3);
            }
        } else if (sort.equals("low")) {
            if (c2.equals("")) {
                foundList = service.findItemsByCategory1Low(c1);
            } else if (c3.equals("")) {
                foundList = service.findItemsByCategory2Low(c1, c2);
            } else {
                foundList = service.findItemByCategory3Low(c1, c2, c3);
            }
        } else if (sort.equals("high")) {
            if (c2.equals("")) {
                foundList = service.findItemsByCategory1High(c1);
            } else if (c3.equals("")) {
                foundList = service.findItemsByCategory2High(c1, c2);
            } else {
                foundList = service.findItemByCategory3High(c1, c2, c3);
            }
        } else if (sort.equals("discount")) {
            if (c2.equals("")) {
                foundList = service.findItemsByCategory1Discount(c1);
            } else if (c3.equals("")) {
                foundList = service.findItemsByCategory2Discount(c1, c2);
            } else {
                foundList = service.findItemByCategory3Discount(c1, c2, c3);
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("sort 값을 입력해 주세요.");
        }

        return ResponseEntity.status(HttpStatus.OK).body(foundList);
    }

    @GetMapping("/items/sale")
    public ResponseEntity<?> getItemListSale() {
        List<Item> foundlist = service.findItemsSale();
        return ResponseEntity.status(HttpStatus.OK).body(foundlist);
    }

    @GetMapping("/items/new")
    public ResponseEntity<?> getItemListNew() {
        List<Item> foundlist = service.findItemsNew();
        return ResponseEntity.status(HttpStatus.OK).body(foundlist);
    }

    @GetMapping("/item")
    public ResponseEntity<?> getItem(@RequestParam(value = "uid") int uid) {
        Item foundItem = service.findItemByUid(uid);
        if (foundItem == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("해당 상품을 찾을 수 없습니다.");
        }

        return ResponseEntity.status(HttpStatus.OK).body(foundItem);
    }
}