var homePage = 'http://www.1stdibs.com';
var expect = require("chai").expect;
var headerText = 'h1.browse-header-title';
var currentHeaderText = '';
var modal = 'span.auth-modal-close';

describe('Test Suite 1', function(){



    it('Should click Furniture and page header should match', function(){
        browser.url(homePage).click('a[data-tn="global-nav-item-link-furniture"]');
        currentHeaderText = browser.getText(headerText);
        console.log('h1 tag is ' + currentHeaderText + '');
        expect(currentHeaderText).to.equal('Furniture');
    });
    it('Should click Fine Art and page header should match', function(){
        browser.click('a[data-tn="global-nav-item-link-fine-art"]');
        currentHeaderText = browser.getText(headerText);
        console.log('h1 tag is '+currentHeaderText+'');
        expect(currentHeaderText).to.equal('Fine Art');
    });
    it('Should click Jewelry & Watches and page header should match', function(){
        browser.click('a[data-tn="global-nav-item-link-jewelry-&-watches"]');
        currentHeaderText = browser.getText(headerText);
        console.log('h1 tag is '+currentHeaderText+'');
        expect(currentHeaderText).to.equal('Jewelry & Watches');
    });
    it('Should click Fashion and page header should match', function(){
        browser.click('a[data-tn="global-nav-item-link-fashion"]');
        currentHeaderText = browser.getText(headerText);
        console.log('h1 tag is '+currentHeaderText+'');
        expect(currentHeaderText).to.equal('Fashion');
    });

});