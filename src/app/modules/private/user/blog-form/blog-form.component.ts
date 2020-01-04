import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, FormGroupDirective} from '@angular/forms';
import { BlogService } from 'src/app/data/service/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private fb: FormBuilder, 
              private blogService: BlogService) { }
   
  blogCategories = this.blogService.categories;

  blogForm: FormGroup;

  createByCategory = false;
  editMode = false;

  newBlogCategoryName: string;
  editBlogId: number;

  // Two way input & contenteditable binding
  blogTitle: string;
  blogDescription: string;
  blogContent: string;

  defaultCoverImagePath = '../../../../../assets/images/defaultcoverimage.jpg';
  editCoverImagePath: string;
  editBlogTitle: string;
  editBlogDescription: string;
  editBlogContent: string;

  public imagePath;
  imgURL: any;
  public message: string;

  addedCategories: string[] = [];

  submitted = false;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.createByCategory = params['category'] != null ? true : false ;
        this.newBlogCategoryName = params['category'] != null ? params['category'] : null;

        this.editMode = params['id'] != null ? true : false;
        this.editBlogId = params['id'] != null ? +params['id'] : null;
        
        this.initForm();
      }
    );

  }


  addCategory(category: string) {
    let blogCategoryFormControl = (this.blogForm.get('categories') as FormArray);

    if (!this.addedCategories.includes(category)) {
      blogCategoryFormControl.push(
        new FormControl(category, Validators.required)
      );
    }
    this.addedCategories.push(category);
  }

  removeCategory(categoryIndex: number, category: string) {
    let blogCategoryFormControl = (this.blogForm.get('categories') as FormArray);
  
    // Remove from addedCategory array
    if (this.addedCategories.includes(category)) { 
      let index = this.addedCategories.indexOf(category);
      if (index > -1) {
        this.addedCategories.splice(index, 1);
      }

       // Remove from category form control array
       blogCategoryFormControl.removeAt(blogCategoryFormControl.value.
        findIndex(blogCategoryFormControl => blogCategoryFormControl === category));
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.blogForm.valid) {
      this.blogService.addBlog(this.blogForm.value);
    }
    console.log(this.blogForm);
  }

  private initForm() {
    let initCoverImagePath = '';
    let initBlogTitle = '';
    let initBlogDescription = '';
    let initBlogCategories = new FormArray([], [Validators.required]);
    let initBlogContent = '';

    if (this.editMode) {
      const blog = this.blogService.getBlog(this.editBlogId);
      initCoverImagePath = blog.imagePath;
      initBlogTitle = blog.title;
      initBlogDescription = blog.description;
      initBlogContent = blog.content;
      if (blog['categories']) {
        for (let category of blog.categories) {
          initBlogCategories.push(
            this.fb.array([category])
          );
        }
      }
    }

    this.blogForm = this.fb.group({
      'title': [initBlogTitle, Validators.required],
      'description': [initBlogDescription, Validators.required],
      'categories': initBlogCategories,
      'content': [initBlogContent, Validators.required]
    });
  }

}
