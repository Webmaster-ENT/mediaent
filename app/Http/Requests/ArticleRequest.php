<?php

namespace App\Http\Requests;
// use App\Models\Article;
use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // 'title'=>'required',
            // 'status'=>'required',
            // 'thumbnail'=>'required|mimes:png,jpg,jpeg',
            // 'field' => ['in:title'],
            // 'order' => ['in:asc,desc'],
            // 'perPage' => ['numeric'],
            ];
    }
}
