<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Validators\AdValidator;
use App\Services\AdManager;

class AdController extends Controller
{
    private $adValidator;
    private $adManager;
    // private $AdManager;
    public function __construct( AdValidator $adValidator, AdManager $adManager ){
        $this->adManager = $adManager;
        $this->adValidator = $adValidator;
    }
    // Crear un anuncio
    public function store( Request $request )
    {
        $validationResults = $this->adValidator->validate( $request->all() );

        if ( $validationResults->fails() ) {
            return response()->json(["El anuncio no se pudo guardar", "warning", $validationResults->errors()->first()], 422);
        }

        $result = $this->adManager->createAd($request->all());
        return $result;
    }

    public function showAll()
    {
        $result = $this->adManager->showAllAds();

        return $result;
    }

    public function destroy($id)
    {
        $result = $this->adManager->deleteAd($id);

        return $result;
    }

    public function update( Request $request, $id )
    {
        // return [$request->all()];
        $validationResults = $this->adValidator->validateEdit( $request->all() );

        if ( $validationResults->fails() ) {
            return response()->json(["El anuncio no se pudo editar", "warning", $validationResults->errors()->first()], 422);
        }

        $result = $this->adManager->updateAd($request->all(), $id);
        return $result;
    }
}
